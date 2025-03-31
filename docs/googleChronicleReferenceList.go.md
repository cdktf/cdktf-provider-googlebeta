# `googleChronicleReferenceList` Submodule <a name="`googleChronicleReferenceList` Submodule" id="@cdktf/provider-google-beta.googleChronicleReferenceList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleReferenceList <a name="GoogleChronicleReferenceList" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list google_chronicle_reference_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.NewGoogleChronicleReferenceList(scope Construct, id *string, config GoogleChronicleReferenceListConfig) GoogleChronicleReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig">GoogleChronicleReferenceListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig">GoogleChronicleReferenceListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putEntries">PutEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntries` <a name="PutEntries" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putEntries"></a>

```go
func PutEntries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putEntries.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putTimeouts"></a>

```go
func PutTimeouts(value GoogleChronicleReferenceListTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts">GoogleChronicleReferenceListTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleChronicleReferenceList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.GoogleChronicleReferenceList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.GoogleChronicleReferenceList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.GoogleChronicleReferenceList_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.GoogleChronicleReferenceList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleChronicleReferenceList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleChronicleReferenceList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleChronicleReferenceList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleReferenceList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.entries">Entries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList">GoogleChronicleReferenceListEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.revisionCreateTime">RevisionCreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.ruleAssociationsCount">RuleAssociationsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.rules">Rules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.scopeInfo">ScopeInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList">GoogleChronicleReferenceListScopeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference">GoogleChronicleReferenceListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.entriesInput">EntriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.referenceListIdInput">ReferenceListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.syntaxTypeInput">SyntaxTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.referenceListId">ReferenceListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.syntaxType">SyntaxType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.entries"></a>

```go
func Entries() GoogleChronicleReferenceListEntriesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList">GoogleChronicleReferenceListEntriesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RevisionCreateTime`<sup>Required</sup> <a name="RevisionCreateTime" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.revisionCreateTime"></a>

```go
func RevisionCreateTime() *string
```

- *Type:* *string

---

##### `RuleAssociationsCount`<sup>Required</sup> <a name="RuleAssociationsCount" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.ruleAssociationsCount"></a>

```go
func RuleAssociationsCount() *f64
```

- *Type:* *f64

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.rules"></a>

```go
func Rules() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeInfo`<sup>Required</sup> <a name="ScopeInfo" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.scopeInfo"></a>

```go
func ScopeInfo() GoogleChronicleReferenceListScopeInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList">GoogleChronicleReferenceListScopeInfoList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.timeouts"></a>

```go
func Timeouts() GoogleChronicleReferenceListTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference">GoogleChronicleReferenceListTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EntriesInput`<sup>Optional</sup> <a name="EntriesInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.entriesInput"></a>

```go
func EntriesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReferenceListIdInput`<sup>Optional</sup> <a name="ReferenceListIdInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.referenceListIdInput"></a>

```go
func ReferenceListIdInput() *string
```

- *Type:* *string

---

##### `SyntaxTypeInput`<sup>Optional</sup> <a name="SyntaxTypeInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.syntaxTypeInput"></a>

```go
func SyntaxTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReferenceListId`<sup>Required</sup> <a name="ReferenceListId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.referenceListId"></a>

```go
func ReferenceListId() *string
```

- *Type:* *string

---

##### `SyntaxType`<sup>Required</sup> <a name="SyntaxType" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.syntaxType"></a>

```go
func SyntaxType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleReferenceListConfig <a name="GoogleChronicleReferenceListConfig" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

&googlechroniclereferencelist.GoogleChronicleReferenceListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Entries: interface{},
	Instance: *string,
	Location: *string,
	ReferenceListId: *string,
	SyntaxType: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.description">Description</a></code> | <code>*string</code> | Required. A user-provided description of the reference list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.entries">Entries</a></code> | <code>interface{}</code> | entries block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.instance">Instance</a></code> | <code>*string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.referenceListId">ReferenceListId</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.syntaxType">SyntaxType</a></code> | <code>*string</code> | Possible values: REFERENCE_LIST_SYNTAX_TYPE_PLAIN_TEXT_STRING REFERENCE_LIST_SYNTAX_TYPE_REGEX REFERENCE_LIST_SYNTAX_TYPE_CIDR. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#id GoogleChronicleReferenceList#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#project GoogleChronicleReferenceList#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts">GoogleChronicleReferenceListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Required. A user-provided description of the reference list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#description GoogleChronicleReferenceList#description}

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.entries"></a>

```go
Entries interface{}
```

- *Type:* interface{}

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#entries GoogleChronicleReferenceList#entries}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#instance GoogleChronicleReferenceList#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#location GoogleChronicleReferenceList#location}

---

##### `ReferenceListId`<sup>Required</sup> <a name="ReferenceListId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.referenceListId"></a>

```go
ReferenceListId *string
```

- *Type:* *string

Required.

The ID to use for the reference list. This is also the display name for
the reference list. It must satisfy the following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Has length < 256.
* Must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#reference_list_id GoogleChronicleReferenceList#reference_list_id}

---

##### `SyntaxType`<sup>Required</sup> <a name="SyntaxType" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.syntaxType"></a>

```go
SyntaxType *string
```

- *Type:* *string

Possible values: REFERENCE_LIST_SYNTAX_TYPE_PLAIN_TEXT_STRING REFERENCE_LIST_SYNTAX_TYPE_REGEX REFERENCE_LIST_SYNTAX_TYPE_CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#syntax_type GoogleChronicleReferenceList#syntax_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#id GoogleChronicleReferenceList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#project GoogleChronicleReferenceList#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.timeouts"></a>

```go
Timeouts GoogleChronicleReferenceListTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts">GoogleChronicleReferenceListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#timeouts GoogleChronicleReferenceList#timeouts}

---

### GoogleChronicleReferenceListEntries <a name="GoogleChronicleReferenceListEntries" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

&googlechroniclereferencelist.GoogleChronicleReferenceListEntries {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries.property.value">Value</a></code> | <code>*string</code> | Required. The value of the entry. Maximum length is 512 characters. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries.property.value"></a>

```go
Value *string
```

- *Type:* *string

Required. The value of the entry. Maximum length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#value GoogleChronicleReferenceList#value}

---

### GoogleChronicleReferenceListScopeInfo <a name="GoogleChronicleReferenceListScopeInfo" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

&googlechroniclereferencelist.GoogleChronicleReferenceListScopeInfo {

}
```


### GoogleChronicleReferenceListScopeInfoReferenceListScope <a name="GoogleChronicleReferenceListScopeInfoReferenceListScope" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

&googlechroniclereferencelist.GoogleChronicleReferenceListScopeInfoReferenceListScope {

}
```


### GoogleChronicleReferenceListTimeouts <a name="GoogleChronicleReferenceListTimeouts" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

&googlechroniclereferencelist.GoogleChronicleReferenceListTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#create GoogleChronicleReferenceList#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#delete GoogleChronicleReferenceList#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#update GoogleChronicleReferenceList#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#create GoogleChronicleReferenceList#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#delete GoogleChronicleReferenceList#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_reference_list#update GoogleChronicleReferenceList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleReferenceListEntriesList <a name="GoogleChronicleReferenceListEntriesList" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.NewGoogleChronicleReferenceListEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleChronicleReferenceListEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.get"></a>

```go
func Get(index *f64) GoogleChronicleReferenceListEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleChronicleReferenceListEntriesOutputReference <a name="GoogleChronicleReferenceListEntriesOutputReference" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.NewGoogleChronicleReferenceListEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleChronicleReferenceListEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleChronicleReferenceListScopeInfoList <a name="GoogleChronicleReferenceListScopeInfoList" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.NewGoogleChronicleReferenceListScopeInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleChronicleReferenceListScopeInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.get"></a>

```go
func Get(index *f64) GoogleChronicleReferenceListScopeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleChronicleReferenceListScopeInfoOutputReference <a name="GoogleChronicleReferenceListScopeInfoOutputReference" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.NewGoogleChronicleReferenceListScopeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleChronicleReferenceListScopeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.referenceListScope">ReferenceListScope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList">GoogleChronicleReferenceListScopeInfoReferenceListScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfo">GoogleChronicleReferenceListScopeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferenceListScope`<sup>Required</sup> <a name="ReferenceListScope" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.referenceListScope"></a>

```go
func ReferenceListScope() GoogleChronicleReferenceListScopeInfoReferenceListScopeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList">GoogleChronicleReferenceListScopeInfoReferenceListScopeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleChronicleReferenceListScopeInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfo">GoogleChronicleReferenceListScopeInfo</a>

---


### GoogleChronicleReferenceListScopeInfoReferenceListScopeList <a name="GoogleChronicleReferenceListScopeInfoReferenceListScopeList" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.NewGoogleChronicleReferenceListScopeInfoReferenceListScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleChronicleReferenceListScopeInfoReferenceListScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.get"></a>

```go
func Get(index *f64) GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference <a name="GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.NewGoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.scopeNames">ScopeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScope">GoogleChronicleReferenceListScopeInfoReferenceListScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeNames`<sup>Required</sup> <a name="ScopeNames" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.scopeNames"></a>

```go
func ScopeNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleChronicleReferenceListScopeInfoReferenceListScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScope">GoogleChronicleReferenceListScopeInfoReferenceListScope</a>

---


### GoogleChronicleReferenceListTimeoutsOutputReference <a name="GoogleChronicleReferenceListTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclereferencelist"

googlechroniclereferencelist.NewGoogleChronicleReferenceListTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleChronicleReferenceListTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



